package cn.javainterview.core.lang.generator;

import cn.javainterview.core.util.IdUtil;

/**
 * UUID生成器
 *
 * @author JavaInterview
 * @since 5.4.3
 */
public class UUIDGenerator implements Generator<String> {
	@Override
	public String next() {
		return IdUtil.fastUUID();
	}
}
