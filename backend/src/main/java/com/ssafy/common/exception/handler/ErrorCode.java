package com.ssafy.common.exception.handler;

import com.sun.net.httpserver.HttpsServer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    //400 BAD_REQUEST: 잘못된 요청
    BAD_REQUEST(HttpStatus.BAD_REQUEST, "잘못된 요청입니다."),


    //401 UNAUTHORIZED : 권한 없음
    ACCESS_NOT_ALLOWED(HttpStatus.UNAUTHORIZED, "권한이 없습니다."),

    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "로그인이 필요한 서비스입니다."),

    //404 : NOT_FOUND_EXCEPTION : 리소스를 찾을 수 없음
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "유저를 찾을 수 없습니다."),
    COMMENT_NOT_FOUND(HttpStatus.NOT_FOUND, "키워드를 찾을 수 없습니다."),

    WC_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 캐릭터를 찾을 수 없습니다."),

    NOT_FOUND_EXCEPTION(HttpStatus.NOT_FOUND, "해당 내용을 찾을 수 없습니다."),
    TAG_NOT_FOUND(HttpStatus.NOT_FOUND, "태그를 찾을 수 없습니다."),
    NOVEL_NOT_FOUND(HttpStatus.NOT_FOUND, "웹소설을 찾을 수 없습니다."),

    PLATFORM_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 플랫폼을 찾을 수 없습니다."),

    WRITER_NOT_FOUND(HttpStatus.NOT_FOUND, "작가를 찾을 수 없습니다."),

    PARSE_ERROR(HttpStatus.NOT_FOUND, "parse 과정에서 에러 발생"),


    //405 METHOD_NOT_ALLOWED: 허용되지 않은 Request Method 호출
    METHOD_NOT_ALLOWED(HttpStatus.METHOD_NOT_ALLOWED, "허용되지 않은 메서드입니다."),

    //409 CONFLICT : 이미 존재하는 정보
    ID_ALREADY_EXISTS(HttpStatus.CONFLICT, "이미 존재하는 아이디입니다."),

    LIST_ALREADY_EXISTS(HttpStatus.CONFLICT, "이미 추가되어있습니다."),

    //500 INTERNAL_SERVER_ERROR: 내부 서버 오류
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "내부 서버 오류입니다.");



    private final HttpStatus status;
    private final String message;


}
