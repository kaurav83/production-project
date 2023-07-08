import { classNames } from './classNames';

describe('classNames', () => {
  const expected = 'some-selector some-selector-into-array';

  test('with only first param', () => {
    expect(classNames('some-selector')).toBe('some-selector');
  });

  test('with additional selector params', () => {
    expect(classNames('some-selector', ['some-selector-into-array'], {})).toBe(expected);
  });

  test('with mods', () => {
    expect(
      classNames(
        'some-selector', ['some-selector-into-array'], { selected: true, hovered: true }
      )).toBe(expected + ' ' + 'selected' + ' ' + 'hovered');
  });

  test('with mods false', () => {
    expect(
      classNames(
        'some-selector', ['some-selector-into-array'], { selected: false, hovered: true }
      )).toBe(expected + ' ' + 'hovered');
  });

  test('with mods undefined', () => {
    expect(
      classNames(
        'some-selector', ['some-selector-into-array'], { selected: true, hovered: undefined }
      )).toBe(expected + ' ' + 'selected');
  });
});