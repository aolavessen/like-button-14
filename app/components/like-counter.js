import Ember from 'ember';

export default Ember.Component.extend({

  Score: 0,
  up(score) {
    this.set(`score`, this.score + 1);
  },
  down(score) {
    this.set(`score`, this.score - 1);
  },
});
