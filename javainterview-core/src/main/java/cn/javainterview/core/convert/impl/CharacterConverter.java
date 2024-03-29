package cn.javainterview.core.convert.impl;

import cn.javainterview.core.convert.AbstractConverter;
import cn.javainterview.core.util.BooleanUtil;
import cn.javainterview.core.util.StrUtil;

/**
 * 字符转换器
 *
 * @author JavaInterview
 *
 */
public class CharacterConverter extends AbstractConverter<Character> {
	private static final long serialVersionUID = 1L;

	@Override
	protected Character convertInternal(Object value) {
		if (value instanceof Boolean) {
			return BooleanUtil.toCharacter((Boolean) value);
		} else {
			final String valueStr = convertToStr(value);
			if (StrUtil.isNotBlank(valueStr)) {
				return valueStr.charAt(0);
			}
		}
		return null;
	}

}
