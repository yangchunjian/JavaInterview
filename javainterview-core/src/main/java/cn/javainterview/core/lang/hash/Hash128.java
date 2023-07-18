package cn.javainterview.core.lang.hash;

/**
 * Hash计算接口
 *
 * @param <T> 被计算hash的对象类型
 * @author JavaInterview
 * @since 5.2.5
 */
@FunctionalInterface
public interface Hash128<T> extends Hash<T>{

	/**
	 * 计算Hash值
	 *
	 * @param t 对象
	 * @return hash
	 */
	Number128 hash128(T t);

	@Override
	default Number hash(T t){
		return hash128(t);
	}
}
