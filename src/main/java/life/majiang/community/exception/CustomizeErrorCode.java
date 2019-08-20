package life.majiang.community.exception;

public enum CustomizeErrorCode implements ICustomizeErrorCode {
    QUESTION_NOT_FOUND("The question you are looking for cannot be found, try other ones.");

    private String message;

    @Override
    public String getMessage() {
        return message;
    }

    CustomizeErrorCode(String message) {
        this.message = message;
    }
}
