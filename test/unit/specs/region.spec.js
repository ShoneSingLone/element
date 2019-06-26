import { createTest, destroyVM } from '../util';
import Region from 'packages/region';

describe('Region', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Region, true);
    expect(vm.$el).to.exist;
  });
});

