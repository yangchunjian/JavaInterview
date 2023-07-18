package cn.javainterview.core.convert.impl;

import cn.javainterview.core.convert.AbstractConverter;
import cn.javainterview.core.lang.Opt;

/**
 *
 * {@link Opt}对象转换器
 *
 * @author JavaInterview
 * @since 5.7.16
 */
public class OptConverter extends AbstractConverter<Opt<?>> {
	private static final long serialVersionUID = 1L;

	@Override
	protected Opt<?> convertInternal(Object value) {
		return Opt.ofNullable(value);
	}

}
