package life.majiang.community.mapper;

import life.majiang.community.model.Question;

// This is a extended mapper that contains our customized query and update methods for the 'Question' table in database.
public interface QuestionExtMapper {
    int incView(Question record);
    int incCommentCount(Question record);
}
