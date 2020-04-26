import { useState, useCallback } from 'react';

export default function useOpenClose(defaultIsOpen = false) {
  const [isOpen, setOpen] = useState(defaultIsOpen);
  const toggle = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  return { isOpen, toggle, open, close };
}
