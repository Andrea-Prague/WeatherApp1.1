import React from 'react';

export default React.createContext({
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  main: undefined,
  error: undefined
})