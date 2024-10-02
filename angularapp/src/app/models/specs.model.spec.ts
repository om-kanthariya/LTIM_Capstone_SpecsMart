import { Specs } from './specs.model';

describe('Specs Model', () => {

  fit('frontend_specs model should create an instance', () => {
    // Create a sample user object
    const specs: Specs = {
      price : 100
    };

    expect(specs).toBeTruthy();
    expect(specs.price).toBe(100);
  });
});
