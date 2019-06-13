import { createTest, destroyVM } from '../util';
import CForm from 'packages/c-form';

describe('CForm', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CForm, true);
    expect(vm.$el).to.exist;
  });
});

