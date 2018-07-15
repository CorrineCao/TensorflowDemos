/**
 * Created by corrinecao on 2018/7/15.
 */
import * as tf from '@tensorflow/tfjs';


export default class Demo {
    newFunc() {
        console.log('tf:', tf);
    }
}
new Demo().newFunc();
