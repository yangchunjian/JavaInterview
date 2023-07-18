package cn.javainterview.core.lang.generator;

import cn.javainterview.core.lang.ObjectId;

/**
 * ObjectId生成器
 *
 * @author JavaInterview
 * @since 5.4.3
 */
public class ObjectIdGenerator implements Generator<String> {
	@Override
	public String next() {
		return ObjectId.next();
	}
}
