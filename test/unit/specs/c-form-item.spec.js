import { createTest, destroyVM } from '../util';
import CFormItem from 'packages/c-form-item';

describe('CFormItem', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CFormItem, true);
    expect(vm.$el).to.exist;
  });
});

