let context = new AudioContext();

function play(freq) {
    let osc = context.createOscillator();
    
    gain = context.createGain();
    osc.connect(gain)
    osc.type = "sawtooth";
    osc.frequency.value = freq;
    gain.connect(context.destination);
    osc.start(0);
    gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5);
}