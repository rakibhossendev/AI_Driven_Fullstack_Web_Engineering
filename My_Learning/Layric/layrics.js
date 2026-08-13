// lyrics.js

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function playLyrics(lyrics) {
  console.clear();

  console.log("\n♪ Playing...\n");

  await sleep(1500);

  const lines = lyrics
    .trim()
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  const indentations = [
    0,
    6,
    12,
    18,
    9,
    15
  ];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Automatic indentation
    const indent = " ".repeat(indentations[i % indentations.length]);

    // Type slowly
    process.stdout.write(indent);

    for (const char of line) {
      process.stdout.write(char);

      // punctuation = slightly longer pause
      if (".!?".includes(char)) {
        await sleep(350);
      } else if (",;:".includes(char)) {
        await sleep(180);
      } else {
        await sleep(55);
      }
    }

    process.stdout.write("\n");

    // Automatically calculated pause
    const pause = Math.min(
      1800,
      Math.max(600, line.length * 25)
    );

    await sleep(pause);
  }

  await sleep(1000);

  console.log("\n                    ♪ ♥ ♪\n");
}


// =================================
// 🎵 PUT YOUR LYRICS HERE
// =================================

playLyrics(`
I remember...
every little thing...
that you said...

And I still think...
about those days...

❤️
`);