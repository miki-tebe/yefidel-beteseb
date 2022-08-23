import { getBet } from '../index';

test('testing ሀ', () => {
  expect(getBet('ሀ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});
test('testing ሁ', () => {
  expect(getBet('ሁ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});
test('testing ሂ', () => {
  expect(getBet('ሂ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});
test('testing ሃ', () => {
  expect(getBet('ሃ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});
test('testing ሄ', () => {
  expect(getBet('ሄ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});
test('testing ህ', () => {
  expect(getBet('ህ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});
test('testing ሆ', () => {
  expect(getBet('ሆ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});
test('testing ሇ', () => {
  expect(getBet('ሇ')).toEqual(['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']);
});

test('testing ለ', () => {
  expect(getBet('ለ')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});
test('testing ሉ', () => {
  expect(getBet('ሉ')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});
test('testing ሊ', () => {
  expect(getBet('ሊ')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});
test('testing ላ', () => {
  expect(getBet('ላ')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});
test('testing ሌ', () => {
  expect(getBet('ሌ')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});
test('testing ል', () => {
  expect(getBet('ል')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});
test('testing ሎ', () => {
  expect(getBet('ሎ')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});
test('testing ሏ', () => {
  expect(getBet('ሏ')).toEqual(['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ']);
});

test('testing ሐ', () => {
  expect(getBet('ሐ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});
test('testing ሑ', () => {
  expect(getBet('ሑ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});
test('testing ሒ', () => {
  expect(getBet('ሒ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});
test('testing ሓ', () => {
  expect(getBet('ሓ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});
test('testing ሔ', () => {
  expect(getBet('ሔ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});
test('testing ሕ', () => {
  expect(getBet('ሕ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});
test('testing ሖ', () => {
  expect(getBet('ሖ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});
test('testing ሗ', () => {
  expect(getBet('ሗ')).toEqual(['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ']);
});

test('testing መ', () => {
  expect(getBet('መ')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});
test('testing ሙ', () => {
  expect(getBet('ሙ')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});
test('testing ሚ', () => {
  expect(getBet('ሚ')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});
test('testing ማ', () => {
  expect(getBet('ማ')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});
test('testing ሜ', () => {
  expect(getBet('ሜ')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});
test('testing ም', () => {
  expect(getBet('ም')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});
test('testing ሞ', () => {
  expect(getBet('ሞ')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});
test('testing ሟ', () => {
  expect(getBet('ሟ')).toEqual(['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ']);
});

test('testing ሠ', () => {
  expect(getBet('ሠ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});
test('testing ሡ', () => {
  expect(getBet('ሡ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});
test('testing ሢ', () => {
  expect(getBet('ሢ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});
test('testing ሣ', () => {
  expect(getBet('ሣ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});
test('testing ሤ', () => {
  expect(getBet('ሤ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});
test('testing ሥ', () => {
  expect(getBet('ሥ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});
test('testing ሦ', () => {
  expect(getBet('ሦ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});
test('testing ሧ', () => {
  expect(getBet('ሧ')).toEqual(['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ']);
});

test('testing ረ', () => {
  expect(getBet('ረ')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});
test('testing ሩ', () => {
  expect(getBet('ሩ')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});
test('testing ሪ', () => {
  expect(getBet('ሪ')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});
test('testing ራ', () => {
  expect(getBet('ራ')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});
test('testing ሬ', () => {
  expect(getBet('ሬ')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});
test('testing ር', () => {
  expect(getBet('ር')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});
test('testing ሮ', () => {
  expect(getBet('ሮ')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});
test('testing ሯ', () => {
  expect(getBet('ሯ')).toEqual(['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ']);
});

test('testing ሰ', () => {
  expect(getBet('ሰ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});
test('testing ሱ', () => {
  expect(getBet('ሱ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});
test('testing ሲ', () => {
  expect(getBet('ሲ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});
test('testing ሳ', () => {
  expect(getBet('ሳ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});
test('testing ሴ', () => {
  expect(getBet('ሴ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});
test('testing ስ', () => {
  expect(getBet('ስ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});
test('testing ሶ', () => {
  expect(getBet('ሶ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});
test('testing ሷ', () => {
  expect(getBet('ሷ')).toEqual(['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ']);
});

test('testing ሸ', () => {
  expect(getBet('ሸ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});
test('testing ሹ', () => {
  expect(getBet('ሹ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});
test('testing ሺ', () => {
  expect(getBet('ሺ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});
test('testing ሻ', () => {
  expect(getBet('ሻ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});
test('testing ሼ', () => {
  expect(getBet('ሼ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});
test('testing ሽ', () => {
  expect(getBet('ሽ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});
test('testing ሾ', () => {
  expect(getBet('ሾ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});
test('testing ሿ', () => {
  expect(getBet('ሿ')).toEqual(['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ']);
});

test('testing ቀ', () => {
  expect(getBet('ቀ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቁ', () => {
  expect(getBet('ቁ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቂ', () => {
  expect(getBet('ቂ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቃ', () => {
  expect(getBet('ቃ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቄ', () => {
  expect(getBet('ቄ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቅ', () => {
  expect(getBet('ቅ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቆ', () => {
  expect(getBet('ቆ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቇ', () => {
  expect(getBet('ቇ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቈ', () => {
  expect(getBet('ቈ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቊ', () => {
  expect(getBet('ቊ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቋ', () => {
  expect(getBet('ቋ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቌ', () => {
  expect(getBet('ቌ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});
test('testing ቍ', () => {
  expect(getBet('ቍ')).toEqual(['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቇ', 'ቈ', 'ቊ', 'ቋ', 'ቌ', 'ቍ']);
});

test('testing ቐ', () => {
  expect(getBet('ቐ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቑ', () => {
  expect(getBet('ቑ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቒ', () => {
  expect(getBet('ቒ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቓ', () => {
  expect(getBet('ቓ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቔ', () => {
  expect(getBet('ቔ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቕ', () => {
  expect(getBet('ቕ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቖ', () => {
  expect(getBet('ቖ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቘ', () => {
  expect(getBet('ቘ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቚ', () => {
  expect(getBet('ቚ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});
test('testing ቛ', () => {
  expect(getBet('ቛ')).toEqual(['ቐ', 'ቑ', 'ቒ', 'ቓ', 'ቔ', 'ቕ', 'ቖ', 'ቘ', 'ቚ', 'ቛ', 'ቜ', 'ቝ']);
});

test('testing በ', () => {
  expect(getBet('በ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});
test('testing ቡ', () => {
  expect(getBet('ቡ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});
test('testing ቢ', () => {
  expect(getBet('ቢ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});
test('testing ባ', () => {
  expect(getBet('ባ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});
test('testing ቤ', () => {
  expect(getBet('ቤ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});
test('testing ብ', () => {
  expect(getBet('ብ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});
test('testing ቦ', () => {
  expect(getBet('ቦ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});
test('testing ቧ', () => {
  expect(getBet('ቧ')).toEqual(['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ']);
});

test('testing ቨ', () => {
  expect(getBet('ቨ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});
test('testing ቩ', () => {
  expect(getBet('ቩ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});
test('testing ቪ', () => {
  expect(getBet('ቪ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});
test('testing ቫ', () => {
  expect(getBet('ቫ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});
test('testing ቬ', () => {
  expect(getBet('ቬ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});
test('testing ቭ', () => {
  expect(getBet('ቭ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});
test('testing ቮ', () => {
  expect(getBet('ቮ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});
test('testing ቯ', () => {
  expect(getBet('ቯ')).toEqual(['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']);
});

test('testing ተ', () => {
  expect(getBet('ተ')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});
test('testing ቱ', () => {
  expect(getBet('ቱ')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});
test('testing ቲ', () => {
  expect(getBet('ቲ')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});
test('testing ታ', () => {
  expect(getBet('ታ')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});
test('testing ቴ', () => {
  expect(getBet('ቴ')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});
test('testing ት', () => {
  expect(getBet('ት')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});
test('testing ቶ', () => {
  expect(getBet('ቶ')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});
test('testing ቷ', () => {
  expect(getBet('ቷ')).toEqual(['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ']);
});

test('testing ቸ', () => {
  expect(getBet('ቸ')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});
test('testing ቹ', () => {
  expect(getBet('ቹ')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});
test('testing ቺ', () => {
  expect(getBet('ቺ')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});
test('testing ቻ', () => {
  expect(getBet('ቻ')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});
test('testing ቼ', () => {
  expect(getBet('ቼ')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});
test('testing ች', () => {
  expect(getBet('ች')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});
test('testing ቾ', () => {
  expect(getBet('ቾ')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});
test('testing ቿ', () => {
  expect(getBet('ቿ')).toEqual(['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ']);
});

test('testing ኀ', () => {
  expect(getBet('ኀ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኁ', () => {
  expect(getBet('ኁ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኂ', () => {
  expect(getBet('ኂ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኃ', () => {
  expect(getBet('ኃ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኄ', () => {
  expect(getBet('ኄ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኅ', () => {
  expect(getBet('ኅ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኆ', () => {
  expect(getBet('ኆ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኇ', () => {
  expect(getBet('ኇ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኈ', () => {
  expect(getBet('ኈ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኊ', () => {
  expect(getBet('ኊ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኋ', () => {
  expect(getBet('ኋ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኌ', () => {
  expect(getBet('ኌ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});
test('testing ኍ', () => {
  expect(getBet('ኍ')).toEqual(['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኇ', 'ኈ', 'ኊ', 'ኋ', 'ኌ', 'ኍ']);
});

test('testing ነ', () => {
  expect(getBet('ነ')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});
test('testing ኑ', () => {
  expect(getBet('ኑ')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});
test('testing ኒ', () => {
  expect(getBet('ኒ')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});
test('testing ና', () => {
  expect(getBet('ና')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});
test('testing ኔ', () => {
  expect(getBet('ኔ')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});
test('testing ን', () => {
  expect(getBet('ን')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});
test('testing ኖ', () => {
  expect(getBet('ኖ')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});
test('testing ኗ', () => {
  expect(getBet('ኗ')).toEqual(['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ']);
});

test('testing ኘ', () => {
  expect(getBet('ኘ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});
test('testing ኙ', () => {
  expect(getBet('ኙ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});
test('testing ኚ', () => {
  expect(getBet('ኚ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});
test('testing ኛ', () => {
  expect(getBet('ኛ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});
test('testing ኜ', () => {
  expect(getBet('ኜ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});
test('testing ኝ', () => {
  expect(getBet('ኝ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});
test('testing ኞ', () => {
  expect(getBet('ኞ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});
test('testing ኟ', () => {
  expect(getBet('ኟ')).toEqual(['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ']);
});

test('testing አ', () => {
  expect(getBet('አ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});
test('testing ኡ', () => {
  expect(getBet('ኡ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});
test('testing ኢ', () => {
  expect(getBet('ኢ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});
test('testing ኣ', () => {
  expect(getBet('ኣ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});
test('testing ኤ', () => {
  expect(getBet('ኤ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});
test('testing እ', () => {
  expect(getBet('እ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});
test('testing ኦ', () => {
  expect(getBet('ኦ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});
test('testing ኧ', () => {
  expect(getBet('ኧ')).toEqual(['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ']);
});

test('testing ከ', () => {
  expect(getBet('ከ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኩ', () => {
  expect(getBet('ኩ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኪ', () => {
  expect(getBet('ኪ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ካ', () => {
  expect(getBet('ካ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኬ', () => {
  expect(getBet('ኬ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ክ', () => {
  expect(getBet('ክ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኮ', () => {
  expect(getBet('ኮ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኯ', () => {
  expect(getBet('ኯ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኰ', () => {
  expect(getBet('ኰ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኲ', () => {
  expect(getBet('ኲ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኳ', () => {
  expect(getBet('ኳ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኴ', () => {
  expect(getBet('ኴ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});
test('testing ኵ', () => {
  expect(getBet('ኵ')).toEqual(['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኯ', 'ኰ', 'ኲ', 'ኳ', 'ኴ', 'ኵ']);
});

test('testing ኸ', () => {
  expect(getBet('ኸ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ኹ', () => {
  expect(getBet('ኹ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ኺ', () => {
  expect(getBet('ኺ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ኻ', () => {
  expect(getBet('ኻ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ኼ', () => {
  expect(getBet('ኼ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ኽ', () => {
  expect(getBet('ኽ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ኾ', () => {
  expect(getBet('ኾ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ዀ', () => {
  expect(getBet('ዀ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ዂ', () => {
  expect(getBet('ዂ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ዃ', () => {
  expect(getBet('ዃ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ዄ', () => {
  expect(getBet('ዄ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});
test('testing ዅ', () => {
  expect(getBet('ዅ')).toEqual(['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ', 'ዀ', 'ዂ', 'ዃ', 'ዄ', 'ዅ']);
});

test('testing ወ', () => {
  expect(getBet('ወ')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});
test('testing ዉ', () => {
  expect(getBet('ዉ')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});
test('testing ዊ', () => {
  expect(getBet('ዊ')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});
test('testing ዋ', () => {
  expect(getBet('ዋ')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});
test('testing ዌ', () => {
  expect(getBet('ዌ')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});
test('testing ው', () => {
  expect(getBet('ው')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});
test('testing ዎ', () => {
  expect(getBet('ዎ')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});
test('testing ዏ', () => {
  expect(getBet('ዏ')).toEqual(['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ', 'ዏ']);
});

test('testing ዐ', () => {
  expect(getBet('ዐ')).toEqual(['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']);
});
test('testing ዑ', () => {
  expect(getBet('ዑ')).toEqual(['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']);
});
test('testing ዒ', () => {
  expect(getBet('ዒ')).toEqual(['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']);
});
test('testing ዓ', () => {
  expect(getBet('ዓ')).toEqual(['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']);
});
test('testing ዔ', () => {
  expect(getBet('ዔ')).toEqual(['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']);
});
test('testing ዕ', () => {
  expect(getBet('ዕ')).toEqual(['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']);
});
test('testing ዖ', () => {
  expect(getBet('ዖ')).toEqual(['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']);
});

test('testing ዘ', () => {
  expect(getBet('ዘ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});
test('testing ዙ', () => {
  expect(getBet('ዙ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});
test('testing ዚ', () => {
  expect(getBet('ዚ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});
test('testing ዛ', () => {
  expect(getBet('ዛ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});
test('testing ዜ', () => {
  expect(getBet('ዜ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});
test('testing ዝ', () => {
  expect(getBet('ዝ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});
test('testing ዞ', () => {
  expect(getBet('ዞ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});
test('testing ዟ', () => {
  expect(getBet('ዟ')).toEqual(['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ']);
});

test('testing ዠ', () => {
  expect(getBet('ዠ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});
test('testing ዡ', () => {
  expect(getBet('ዡ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});
test('testing ዢ', () => {
  expect(getBet('ዢ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});
test('testing ዣ', () => {
  expect(getBet('ዣ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});
test('testing ዤ', () => {
  expect(getBet('ዤ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});
test('testing ዥ', () => {
  expect(getBet('ዥ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});
test('testing ዦ', () => {
  expect(getBet('ዦ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});
test('testing ዧ', () => {
  expect(getBet('ዧ')).toEqual(['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ']);
});

test('testing የ', () => {
  expect(getBet('የ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});
test('testing ዩ', () => {
  expect(getBet('ዩ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});
test('testing ዪ', () => {
  expect(getBet('ዪ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});
test('testing ያ', () => {
  expect(getBet('ያ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});
test('testing ዬ', () => {
  expect(getBet('ዬ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});
test('testing ይ', () => {
  expect(getBet('ይ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});
test('testing ዮ', () => {
  expect(getBet('ዮ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});
test('testing ዯ', () => {
  expect(getBet('ዯ')).toEqual(['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ', 'ዯ']);
});

test('testing ደ', () => {
  expect(getBet('ደ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዱ', () => {
  expect(getBet('ዱ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዲ', () => {
  expect(getBet('ዲ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዳ', () => {
  expect(getBet('ዳ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዴ', () => {
  expect(getBet('ዴ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ድ', () => {
  expect(getBet('ድ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዶ', () => {
  expect(getBet('ዶ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዷ', () => {
  expect(getBet('ዷ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዸ', () => {
  expect(getBet('ዸ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዹ', () => {
  expect(getBet('ዹ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዺ', () => {
  expect(getBet('ዺ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዻ', () => {
  expect(getBet('ዻ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዼ', () => {
  expect(getBet('ዼ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዽ', () => {
  expect(getBet('ዽ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዾ', () => {
  expect(getBet('ዾ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});
test('testing ዿ', () => {
  expect(getBet('ዿ')).toEqual(['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ', 'ዸ', 'ዹ', 'ዺ', 'ዻ', 'ዼ', 'ዽ', 'ዾ', 'ዿ']);
});

test('testing ጀ', () => {
  expect(getBet('ጀ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});
test('testing ጁ', () => {
  expect(getBet('ጁ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});
test('testing ጂ', () => {
  expect(getBet('ጂ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});
test('testing ጃ', () => {
  expect(getBet('ጃ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});
test('testing ጄ', () => {
  expect(getBet('ጄ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});
test('testing ጅ', () => {
  expect(getBet('ጅ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});
test('testing ጆ', () => {
  expect(getBet('ጆ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});
test('testing ጇ', () => {
  expect(getBet('ጇ')).toEqual(['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ']);
});

test('testing ገ', () => {
  expect(getBet('ገ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጉ', () => {
  expect(getBet('ጉ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጊ', () => {
  expect(getBet('ጊ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጋ', () => {
  expect(getBet('ጋ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጌ', () => {
  expect(getBet('ጌ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ግ', () => {
  expect(getBet('ግ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጎ', () => {
  expect(getBet('ጎ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጏ', () => {
  expect(getBet('ጏ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጐ', () => {
  expect(getBet('ጐ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጒ', () => {
  expect(getBet('ጒ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጓ', () => {
  expect(getBet('ጓ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጔ', () => {
  expect(getBet('ጔ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});
test('testing ጕ', () => {
  expect(getBet('ጕ')).toEqual(['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጏ', 'ጐ', 'ጒ', 'ጓ', 'ጔ', 'ጕ']);
});

test('testing ጘ', () => {
  expect(getBet('ጘ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});
test('testing ጙ', () => {
  expect(getBet('ጙ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});
test('testing ጚ', () => {
  expect(getBet('ጚ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});
test('testing ጛ', () => {
  expect(getBet('ጛ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});
test('testing ጜ', () => {
  expect(getBet('ጜ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});
test('testing ጝ', () => {
  expect(getBet('ጝ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});
test('testing ጞ', () => {
  expect(getBet('ጞ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});
test('testing ጟ', () => {
  expect(getBet('ጟ')).toEqual(['ጘ', 'ጙ', 'ጚ', 'ጛ', 'ጜ', 'ጝ', 'ጞ', 'ጟ']);
});

test('testing ጠ', () => {
  expect(getBet('ጠ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});
test('testing ጡ', () => {
  expect(getBet('ጡ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});
test('testing ጢ', () => {
  expect(getBet('ጢ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});
test('testing ጣ', () => {
  expect(getBet('ጣ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});
test('testing ጤ', () => {
  expect(getBet('ጤ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});
test('testing ጥ', () => {
  expect(getBet('ጥ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});
test('testing ጦ', () => {
  expect(getBet('ጦ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});
test('testing ጧ', () => {
  expect(getBet('ጧ')).toEqual(['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ']);
});

test('testing ጨ', () => {
  expect(getBet('ጨ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});
test('testing ጩ', () => {
  expect(getBet('ጩ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});
test('testing ጪ', () => {
  expect(getBet('ጪ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});
test('testing ጫ', () => {
  expect(getBet('ጫ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});
test('testing ጬ', () => {
  expect(getBet('ጬ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});
test('testing ጭ', () => {
  expect(getBet('ጭ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});
test('testing ጮ', () => {
  expect(getBet('ጮ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});
test('testing ጯ', () => {
  expect(getBet('ጯ')).toEqual(['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ']);
});

test('testing ጰ', () => {
  expect(getBet('ጰ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});
test('testing ጱ', () => {
  expect(getBet('ጱ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});
test('testing ጲ', () => {
  expect(getBet('ጲ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});
test('testing ጳ', () => {
  expect(getBet('ጳ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});
test('testing ጴ', () => {
  expect(getBet('ጴ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});
test('testing ጵ', () => {
  expect(getBet('ጵ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});
test('testing ጶ', () => {
  expect(getBet('ጶ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});
test('testing ጷ', () => {
  expect(getBet('ጷ')).toEqual(['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ']);
});

test('testing ጸ', () => {
  expect(getBet('ጸ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});
test('testing ጹ', () => {
  expect(getBet('ጹ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});
test('testing ጺ', () => {
  expect(getBet('ጺ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});
test('testing ጻ', () => {
  expect(getBet('ጻ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});
test('testing ጼ', () => {
  expect(getBet('ጼ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});
test('testing ጽ', () => {
  expect(getBet('ጽ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});
test('testing ጾ', () => {
  expect(getBet('ጾ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});
test('testing ጿ', () => {
  expect(getBet('ጿ')).toEqual(['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ']);
});

test('testing ፀ', () => {
  expect(getBet('ፀ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});
test('testing ፁ', () => {
  expect(getBet('ፁ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});
test('testing ፂ', () => {
  expect(getBet('ፂ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});
test('testing ፃ', () => {
  expect(getBet('ፃ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});
test('testing ፄ', () => {
  expect(getBet('ፄ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});
test('testing ፅ', () => {
  expect(getBet('ፅ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});
test('testing ፆ', () => {
  expect(getBet('ፆ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});
test('testing ፇ', () => {
  expect(getBet('ፇ')).toEqual(['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ', 'ፇ']);
});

test('testing ፈ', () => {
  expect(getBet('ፈ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});
test('testing ፉ', () => {
  expect(getBet('ፉ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});
test('testing ፊ', () => {
  expect(getBet('ፊ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});
test('testing ፋ', () => {
  expect(getBet('ፋ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});
test('testing ፌ', () => {
  expect(getBet('ፌ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});
test('testing ፍ', () => {
  expect(getBet('ፍ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});
test('testing ፎ', () => {
  expect(getBet('ፎ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});
test('testing ፏ', () => {
  expect(getBet('ፏ')).toEqual(['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ']);
});

test('testing ፐ', () => {
  expect(getBet('ፐ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});
test('testing ፑ', () => {
  expect(getBet('ፑ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});
test('testing ፒ', () => {
  expect(getBet('ፒ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});
test('testing ፓ', () => {
  expect(getBet('ፓ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});
test('testing ፔ', () => {
  expect(getBet('ፔ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});
test('testing ፕ', () => {
  expect(getBet('ፕ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});
test('testing ፖ', () => {
  expect(getBet('ፖ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});
test('testing ፗ', () => {
  expect(getBet('ፗ')).toEqual(['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ']);
});

test('testing null', () => {
  expect(getBet('12')).toEqual(null);
});

test('testing 1202', () => {
  expect(getBet('1202')).toEqual(null);
});
