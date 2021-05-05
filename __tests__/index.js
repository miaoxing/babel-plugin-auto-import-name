import plugin from '..';

describe('test', () => {
  test('basic', () => {
    const result = plugin();
    expect(result).toBeInstanceOf(Object);
    expect(result).toMatchObject({name: 'auto-import-name'});
    expect(result.visitor).toBeInstanceOf(Object);
  });
});
