import { useEffect, useState } from 'react';

export const isFalsy = (value: any) => value === 0 ? false : !value

// 在一個函數裡，改變傳入的對象是不好的
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(object).forEach(key => {
    // @ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [])
}

// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func(...param);
//     }, delay);
//   }
// }

// delay 後面?代表可傳可不傳
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在 value 變化後，設置一個定時器
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);
    // 每次在上一個 useEffect 處理完以後再運行
    return () => clearTimeout(timeout);
  }, [value, delay])

  return debouncedValue;
}