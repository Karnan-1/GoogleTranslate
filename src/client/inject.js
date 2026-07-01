// eslint-disable-next-line no-undef
iframeDOM = {
  deletePageContents: () => {
    // Google Translate's DOM/classnames change over time, so each cleanup
    // step is best-effort: a missing element should not abort the rest.
    const remove = (element) => {
      if (element) {
        element.remove();
      }
    };

    const header = document.getElementsByTagName('header')[0];
    remove(header);
    if (header) {
      document.body.style.transform = 'translateY(-56px)'
    }

    remove(document.getElementsByTagName('nav')[1]);
    remove(document.querySelectorAll('[aria-haspopup]')[0]);
    remove(document.querySelector('.feedback-link'));
    remove(document.querySelector('.gp-footer'));

    const frame = document.querySelector('.frame');
    if (frame) {
      frame.style = 'height:100vh;';
    }
  },
  clearTextArea: () => {
    const clearButton = document.querySelector('[aria-label="Clear source text"]')
      || document.getElementsByTagName('button')[24];
    if (clearButton) {
      clearButton.click();
    }
  },
  getURL: () => window.location.hash,
  setURL: (arg) => {
    window.location.hash = arg;
  },
};
