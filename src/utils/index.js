import { useEffect, useState } from 'react';

export const isFalsy = (value) => value === 0 ? false : !value

// 在一個函數裡，改變傳入的對象是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach(key => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback) => {
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

export const useDebounce = (value, delay) => {
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