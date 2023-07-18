package cn.javainterview.core.thread;

import cn.javainterview.core.exceptions.ExceptionUtil;
import cn.javainterview.core.util.StrUtil;

/**
 * 工具类异常
 *
 * @author JavaInterview
 * @since 5.7.17
 */
public class ThreadException extends RuntimeException {
	private static final long serialVersionUID = 5253124428623713216L;

	public ThreadException(Throwable e) {
		super(ExceptionUtil.getMessage(e), e);
	}

	public ThreadException(String message) {
		super(message);
	}

	public ThreadException(String messageTemplate, Object... params) {
		super(StrUtil.format(messageTemplate, params));
	}

	public ThreadException(String message, Throwable throwable) {
		super(message, throwable);
	}

	public ThreadException(String message, Throwable throwable, boolean enableSuppression, boolean writableStackTrace) {
		super(message, throwable, enableSuppression, writableStackTrace);
	}

	public ThreadException(Throwable throwable, String messageTemplate, Object... params) {
		super(StrUtil.format(messageTemplate, params), throwable);
	}
}
