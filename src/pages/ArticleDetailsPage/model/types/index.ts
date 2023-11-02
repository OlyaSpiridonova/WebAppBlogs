import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsRecomendationsSchema } from './articleDetailsPageRecomendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recomendations: ArticleDetailsRecomendationsSchema;
}
