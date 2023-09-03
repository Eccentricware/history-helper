export const genericlyRandomizeArray = (originalArray: any[]): any[] => {
  const origArray = originalArray.slice();
  const randomizedArray: any[] = [];

  while (origArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * origArray.length);
    randomizedArray.push(origArray.splice(randomIndex, 1)[0]);
  }

  return randomizedArray;
}