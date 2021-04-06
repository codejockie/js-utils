/**
 * Generates a universally unique identifier (UUID).
 */
export function uuid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const rand = (Math.random() * 16) | 0;
    return (char == "x" ? rand : (rand & 0x3) | 0x8).toString(16);
  });
}
