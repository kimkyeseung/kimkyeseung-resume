export const changeBacktickToCode = (input: string): string => {
  return input.replace(/`([^`]*)`/g, '<code>$1</code>')
}
