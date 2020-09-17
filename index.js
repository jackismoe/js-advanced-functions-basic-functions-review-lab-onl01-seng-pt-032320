const saturdayFun = (activity = 'roller-skate') => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (work = 'go to the office') => {
  return `This Monday, I will ${work}.`
}

const wrapAdjective = (flair = '*') => {
  return (msg = 'special') => {
    return `You are ${flair}${msg}${flair}!`
  }
}

const Calculator = {
  add: () => {
    return 1 + 3
  },
  subtract: () => {
    return 1 - 3
  },
  multiply: () => {
    return 1 * 3
  },
  divide: () => {
    return 10 / 5
  }
}

const actionApplyer = (start, ray) => {
  let a = start

  for (let i = 0; i < ray.length; i++) {
    a = ray[i](a)
  }
  return a
}