const isoInput = document.getElementById("iso");
const apertureInput = document.getElementById("aperture");
const shutterInput = document.getElementById("shutter");

const isoValue = document.getElementById("iso-value");
const apertureValue = document.getElementById("aperture-value");
const shutterValue = document.getElementById("shutter-value");

const overlayIso = document.getElementById("overlay-iso");
const overlayAperture = document.getElementById("overlay-aperture");
const overlayShutter = document.getElementById("overlay-shutter");

const exposureFeel = document.getElementById("exposure-feel");
const dofFeel = document.getElementById("dof-feel");
const motionFeel = document.getElementById("motion-feel");

const shutterStops = [
  "1/4000",
  "1/2000",
  "1/1000",
  "1/500",
  "1/250",
  "1/125",
  "1/60",
  "1/30",
  "1/15",
  "1/8",
  "1/4",
  "1/2",
  "1",
  "2",
  "4",
  "8",
  "15",
  "30",
];

const mapShutterToIndex = (value) => {
  const index = Math.min(Math.max(parseInt(value, 10), 1), shutterStops.length);
  return index - 1;
};

const calculateExposure = (iso, aperture, shutterIndex) => {
  const isoFactor = iso / 200;
  const apertureFactor = 4 / aperture;
  const shutterFactor = 1 + shutterIndex / 10;
  const exposure = isoFactor * apertureFactor * shutterFactor;
  return Math.min(Math.max(exposure, 0.4), 2.2);
};

const updateLabels = () => {
  const iso = Number(isoInput.value);
  const aperture = Number(apertureInput.value);
  const shutterIndex = mapShutterToIndex(shutterInput.value);
  const shutterDisplay = shutterStops[shutterIndex];

  isoValue.textContent = iso;
  apertureValue.textContent = `f/${aperture.toFixed(1)}`;
  shutterValue.textContent = shutterDisplay;

  overlayIso.textContent = iso;
  overlayAperture.textContent = `f/${aperture.toFixed(1)}`;
  overlayShutter.textContent = shutterDisplay;

  const exposure = calculateExposure(iso, aperture, shutterIndex);
  document.documentElement.style.setProperty("--exposure", exposure.toFixed(2));

  const blur = Math.max(1, (aperture / 16) * 8);
  document.documentElement.style.setProperty("--blur", `${blur.toFixed(1)}px`);

  if (exposure < 0.8) {
    exposureFeel.textContent = "Moody & Dark";
  } else if (exposure < 1.3) {
    exposureFeel.textContent = "Balanced";
  } else {
    exposureFeel.textContent = "Bright & Airy";
  }

  if (aperture <= 2.8) {
    dofFeel.textContent = "Shallow";
  } else if (aperture <= 8) {
    dofFeel.textContent = "Medium";
  } else {
    dofFeel.textContent = "Deep";
  }

  if (shutterIndex < 4) {
    motionFeel.textContent = "Frozen";
  } else if (shutterIndex < 9) {
    motionFeel.textContent = "Some Blur";
  } else {
    motionFeel.textContent = "Blurry";
  }
};

[isoInput, apertureInput, shutterInput].forEach((input) => {
  input.addEventListener("input", updateLabels);
});

updateLabels();
