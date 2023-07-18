package cn.javainterview.core.convert.impl;

import cn.javainterview.core.convert.AbstractConverter;

import java.util.TimeZone;

/**
 * TimeZone转换器
 * @author JavaInterview
 *
 */
public class TimeZoneConverter extends AbstractConverter<TimeZone>{
	private static final long serialVersionUID = 1L;

	@Override
	protected TimeZone convertInternal(Object value) {
		return TimeZone.getTimeZone(convertToStr(value));
	}

}
