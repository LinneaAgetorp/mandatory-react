import {makeMove, newGame} from '../src/logic';

test('first move works ok', () => {
  const initial = newGame();
  const expected = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: [] };
  const result = makeMove(initial, 2);
  expect(result).toEqual(expected);
  expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});

test('second move works ok', () => {
    const expected = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: [] };
    const expectedmove2 = { state: 'plr1', board: [0,0,1,0,2,0,0,0,0], line: [] };
    const result = makeMove(expected, 4);
    expect(result).toEqual(expectedmove2);

});

test('should not work to click same tile, should return same game-state', () => {
    const firstMove = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: [] };
    const secondMove = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: [] };
    const result = makeMove(firstMove, 2);
    expect(result).toEqual(secondMove);

});

test('player 1 won', () => {
    const plr1Move = { state: 'plr1', board: [1,0,1,0,0,0,0,2,2], line: [] };
    const finished = { state: 'plr1won', board: [1,1,1,0,0,0,0,2,2], line: [] };
    const result = makeMove(plr1Move, 1);
    expect(result).toEqual(finished);
})

test('should not work to keep playing after player 1 won', () => {
    const finished = { state: 'plr1won', board: [1,1,1,0,0,0,0,2,2], line: [] };
    const tryingToContinuePlaying = { state: 'plr1won', board: [1,1,1,0,0,0,0,2,2], line: [] };
    const result = makeMove(finished, 6);
    expect(result).toEqual(tryingToContinuePlaying);

})

test('should print message: It is a draw!', () => {
    const lastMove = { state: 'plr1', board:   [1,2,1,0,1,2,2,1,2], line: [] };
    const secondMove = { state: 'draw', board: [1,2,1,1,1,2,2,1,2], line: [] };
    const result = makeMove(lastMove, 3);
    expect(result).toEqual(secondMove);

});


