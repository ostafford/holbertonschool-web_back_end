export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  // Create the storage space (length) of your ArrayBuffer this is dependent on the argument that is passed through length
  
  const dataView = new DataView(buffer);
  // Create the "tool" (view) to see and manipulate your buffer
  // The DataView doesn't just let you see the buffer - it provides methods to read and write to it
  
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // Check that your position is within the valid range of the buffer's length
  // Since positions are 0-indexed, valid positions are from 0 to length-1
  
  dataView.setInt8(position, value);
  // "setInt8" is the method that writes an 8-bit signed integer (value)
  // to the specific position within your ArrayBuffer
  
  return dataView;
  // Return the DataView which contains a reference to the buffer with our data
}