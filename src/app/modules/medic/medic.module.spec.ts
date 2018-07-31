import { MedicModule } from './medic.module';

describe('MedicModule', () => {
  let medicModule: MedicModule;

  beforeEach(() => {
    medicModule = new MedicModule();
  });

  it('should create an instance', () => {
    expect(medicModule).toBeTruthy();
  });
});
