# Chip Component

View it live here: 

### Local Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the project: `npm run dev`

### Specifications

1. When you click on the input field, a list of items will appear.
2. As you type, the list should show only items that match what you're typing.
3. Clicking on an item should turn it into a chip at the top, and the input field should adjust automatically.
4. Once an item becomes a chip, it should no longer be in the list.
5. Each chip has an "X" icon. Clicking it removes the chip and adds the item back to the list.
6. When the input is blank and the user presses backspace, the last chip (for example, Nick Giannopoulos) should get highlighted and on again pressing backspace it should get deleted.

### Keyboard Shortcuts
1. `Esc` to hide dropdown
2. `Enter` to select first option from dropdown
3. `Consecutive Backspaces` to delete last selected option
