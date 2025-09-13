import { Readable } from 'stream'
import { AssemblyAI } from 'assemblyai'
import recorder from 'node-record-lpcm16'

const run = async () => {
  const client = new AssemblyAI({
    apiKey: process.env.ASSEMBLY_API,
  });

  const transcriber = client.streaming.transcriber({
    sampleRate: 16000,
    formatTurns: true
  });

  transcriber.on("open", ({ id }) => {
    console.log(`Session opened with ID: ${id}`);
  });

  transcriber.on("error", (error) => {
    console.error("Error:", error);
  });

  transcriber.on("close", (code, reason) => {
    console.log("Session closed:", code, reason);
  });

  transcriber.on("turn", (turn) => {
    if (!turn.transcript) return;
    console.log("Turn:", turn.transcript);
  });

  try {
    console.log("Connecting to streaming transcript service...");
    await transcriber.connect();

    console.log("Starting recording...");
    const recording = recorder.record({
      channels: 1,
      sampleRate: 16000,
    });

    Readable.toWeb(recording.stream()).pipeTo(transcriber.stream());

    process.on("SIGINT", async () => {
      console.log("\nStopping recording...");
      recording.stop();

      console.log("Closing streaming transcript connection...");
      await transcriber.close();

      process.exit();
    });
  } catch (error) {
    console.error(error);
  }
};

run();
