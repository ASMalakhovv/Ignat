import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from './HW11.module.scss'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeRange = (value: number | [number, number]) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        } else {
            if (value <= value2) {
                setValue1(value)
            }
        }
    }


    return (
        <div>
            <hr/>
            homeworks 11


            <div className={style.rangeContainer}>
                <div className={style.superRange}>
                    <span>{value1}</span>
                    <SuperRange
                        onChangeRange={onChangeRange}
                        value={value1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div className={style.superDoubleRange}>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeRange}
                        disable
                    />
                    <span>{value2}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
