const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    
    
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })
  return orderedArray
}
const mapOrders = (originalArray, key) => {
  if (!originalArray) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    console.log(a[key])
  })
  return orderedArray
}
/**
 * Example:
 */
const originalItems = [
  { id: 'id-1', name: 'One' }, 
  { id: 'id-2', name: 'Two' },
  { id: 'id-3', name: 'Three' },
  { id: 'id-4', name: 'Four' },
  { id: 'id-5', name: 'Five' }
]
const key = 'id'

mapOrders(originalItems, key)

const itemOrderIds = ['id-5', 'id-4', 'id-2', 'id-3', 'id-1']

const orderedArray = mapOrder(originalItems, itemOrderIds, key)
// console.log('Original:', originalItems)
// console.log('Ordered:', orderedArray)