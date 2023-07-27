// Formula to calculate the pressure is:

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let mol1 = givenMass1 / molarMass1
    let mol2 = givenMass2 / molarMass2
    let total = mol1 +mol2
    let product = total * .082 * (temp+273.15)
    return product /volume
  }