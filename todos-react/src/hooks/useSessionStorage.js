import { useState, useEffect } from 'react';

export const useSessionStorage = ( key  , initialValue )  => {
    const [ storedValue, setStoredValue ] = useState( () => {
        try {
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch ( error ) {
            return initialValue;
        }
    });

    const setValue = ( value ) => {
        try {
            setStoredValue (value);
            window.sessionStorage.setItem(key, JSON.stringify(value));
        }catch ( error ) {
            console.error('Error saving to sessionStorage:', error);
        }
    };

    return [ storedValue, setValue ];
};