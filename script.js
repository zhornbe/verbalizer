document.getElementById("randomizeButton").addEventListener("click", () => {
  const input = document.getElementById("wordInput").value;
  const words = input.split(/\s+/).filter(word => word.trim() !== "");
  const shuffled = words.sort(() => Math.random() - 0.5);
  document.getElementById("result").textContent = shuffled.join(" ");
});
