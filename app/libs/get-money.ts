/* eslint-disable @typescript-eslint/no-explicit-any */
export function getMoney(data : any, type : any) {
    return data.reduce((total : number, curr : any) => {
      const category = curr.category[0].name
      if (type === "balance") {
        if (category === "income") return (total += curr.money)
        total -= curr.money
      }
  
      if (type === "income" && category === "income") {
        total += curr.money
      }
  
      if (type === "expense" && category === "expense") {
        total -= curr.money
      }
  
      return total
    }, 0)
  }