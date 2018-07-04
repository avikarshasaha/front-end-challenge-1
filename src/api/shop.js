/**
 * Mocking client-server processing
 */
import _data from './product.json'

const TIMEOUT = 100

export default {
  getData: (cb, timeout) => setTimeout(() => cb(_data), timeout || TIMEOUT),
}
