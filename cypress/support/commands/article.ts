import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Тестовая статья',
    subtitle: 'Test',
    img: 'https://encrypted-tbn0.gstatic.com/images?'
    + 'q=tbn:ANd9GcTXVyyPm1_KoYHzY-wV1VTyW02Bvo7wssj8g7GpIfhJUNzxAPmPK10q63mSuCeS4im-zRU&usqp=CAU',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'SCIENCE',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'auth' },
        body: article ?? defaultArticle,
    }).then(((resp) => resp.body));
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'auth' },
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(article?: Article): Chainable<Article>
        removeArticle(articleId: string): Chainable<void>
      }
    }
  }
