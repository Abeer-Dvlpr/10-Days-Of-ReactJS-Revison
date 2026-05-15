// hooks/useTheme.js - Sirf itna kaam
import { useState } from 'react';

function useTheme() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(!dark);
  return { dark, toggle };
}
export default useTheme