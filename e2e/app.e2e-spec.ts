import { TeamMkrPage } from './app.po';

describe('team-mkr App', function() {
  let page: TeamMkrPage;

  beforeEach(() => {
    page = new TeamMkrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
