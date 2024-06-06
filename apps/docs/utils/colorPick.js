export function getColorScale(hexColor) {
  // Convierte el color hexadecimal a RGB
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  // Convierte RGB a HSL
  const hsl = rgbToHsl(r, g, b);

  // Calcula la escala de colores HSL
  const scale = [];
  for (let i = 100; i <= 1000; i += 100) {
    let lightness = 100 - (i / 1000) * 95; // Se ajusta el valor de luminosidad
    if (i === 100) {
      lightness = 95; // Establecer luminosidad predeterminada en 95% para el último valor
    }
    scale[i] = `hsl(${hsl.h},${hsl.s}%,${lightness}%)`;
  }

  return scale;
}

// Función para convertir RGB a HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToHex(hslColor) {
  // Extraer los componentes HSL del string
  const regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/;
  const matches = hslColor.match(regex);
  if (!matches) {
    throw new Error('Invalid HSL color format');
  }

  const hue = parseInt(matches[1]);
  const saturation = parseFloat(matches[2]) / 100;
  const lightness = parseFloat(matches[3]) / 100;

  // Convertir HSL a RGB
  let chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  let huePrime = hue / 60;
  let x = chroma * (1 - Math.abs((huePrime % 2) - 1));
  let rgb = [0, 0, 0];

  if (0 <= huePrime && huePrime < 1) {
    rgb = [chroma, x, 0];
  } else if (1 <= huePrime && huePrime < 2) {
    rgb = [x, chroma, 0];
  } else if (2 <= huePrime && huePrime < 3) {
    rgb = [0, chroma, x];
  } else if (3 <= huePrime && huePrime < 4) {
    rgb = [0, x, chroma];
  } else if (4 <= huePrime && huePrime < 5) {
    rgb = [x, 0, chroma];
  } else if (5 <= huePrime && huePrime < 6) {
    rgb = [chroma, 0, x];
  }

  let m = lightness - chroma / 2;
  rgb = rgb.map((c) => Math.round((c + m) * 255));

  // Convertir RGB a hexadecimal
  return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
}

export function getContrast(color, background) {
  const getLuminance = (hex) => {
    // if (!hex) return null;

    const sRGB = parseInt(hex.slice(1), 16); // Convertir hexadecimal a decimal
    const RsRGB = (sRGB >> 16) / 255; // Componente R
    const GsRGB = ((sRGB >> 8) & 0xff) / 255; // Componente G
    const BsRGB = (sRGB & 0xff) / 255; // Componente B
    const R =
      RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    const G =
      GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    const B =
      BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B; // Fórmula de luminancia
  };

  const luminance1 = getLuminance(color);
  const luminance2 = getLuminance(background);

  const contrastRatio =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05);

  // console.log('contrastRatio', contrastRatio);

  return contrastRatio.toFixed(2); // Redondear a 2 decimales
}

export function calculateContrast(text, background) {
  const getLuminance = (hex) => {
    const sRGB = parseInt(hex.slice(1), 16); // Convertir hexadecimal a decimal
    const RsRGB = (sRGB >> 16) / 255; // Componente R
    const GsRGB = ((sRGB >> 8) & 0xff) / 255; // Componente G
    const BsRGB = (sRGB & 0xff) / 255; // Componente B
    const R =
      RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    const G =
      GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    const B =
      BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B; // Fórmula de luminancia
  };

  const luminanceText = getLuminance(text);
  const luminanceBackground = getLuminance(background);

  const contrastRatio =
    (Math.max(luminanceText, luminanceBackground) + 0.05) /
    (Math.min(luminanceText, luminanceBackground) + 0.05);
  const ratio = contrastRatio.toFixed(2);

  return {
    ratio,
    // Verificar si cumple con las pautas de WebAIM
    AA: ratio >= 4.5,
    AAA: ratio >= 7,
    // AALarge: ratio >= 3,
    // AAALarge: ratio >= 4.5,
  };
}
