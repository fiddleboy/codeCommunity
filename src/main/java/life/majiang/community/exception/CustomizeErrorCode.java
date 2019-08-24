package life.majiang.community.exception;

public enum CustomizeErrorCode implements ICustomizeErrorCode {
    QUESTION_NOT_FOUND(2001, "The question you are looking for cannot be found, try other ones."),
    TARGET_PARAM_NOT_FOUND(2002, "未选择任何问题或评论进行回复"),
    NO_LOGIN(2003, "当前操作需要登陆，请登录后重试"),
    SYS_ERROR(2004, "Server got fire, maybe try again later?"),
    TYPE_PARAM_WRONG(2005, "Comment type is wrong or not exist."),
    COMMENT_NOT_FOUND(2006, "The comment you are looking for cannot be found!"),
    CONTENT_IS_EMPTY(2007, "Comment body could not be empty!")
    ;

    private String message;

    private Integer code;

    CustomizeErrorCode(Integer code, String message){
        this.message = message;
        this.code = code;
    }

    @Override
    public String getMessage() {
        return message;
    }

    @Override
    public Integer getCode() {
        return code;
    }
}
