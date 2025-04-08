import {FC} from "react";
import {Product} from "@/app/types/types";
import {ToggleGroup, ToggleGroupItem} from "@/shadcn/ui/toggle-group";
import Image from "next/image";
import {observer} from "mobx-react-lite";

export const DrawerCharacteristic: FC<{
    product: Product,
    handleCharacteristicChange: (characId: string, characName: string, variant: string, price: number) => void
}> = observer(({product, handleCharacteristicChange}) => {

    return(
        <div className=''>
            {product.characteristics.map((charac) => (
                <>
                    <span className='pb-2 block'>{charac.name}</span>
                    <ToggleGroup
                        key={charac.id}
                        type="single"
                        className={charac.id == 'color' ?
                            "toggle-group flex h-[160] gap-2 mt-2 justify-start pb-3": "flex h-10 gap-2 mt-3 justify-start pb-3"
                        }
                    >
                        {charac.variants.map((e, i) => (
                            <ToggleGroupItem
                                // data-state={i == 0 ? 'on': 'off'}
                                value={e.variantName}
                                className={charac.id == 'color' ?
                                    "block rounded-lg overflow-hidden w-[160] h-[160]": "rounded-[10px] overflow-hidden py-2 px-5"
                                }
                                key={e.variantName}
                                onClick={
                                    () => handleCharacteristicChange(
                                        charac.id,
                                        charac.name,
                                        e.variantTitle,
                                        charac.expensivePrices[i],
                                    )
                                }
                            >
                                {e.variantImage && (
                                    <Image
                                        src={e.variantImage}
                                        alt={e.variantImage}
                                        width={160}
                                        height={160}
                                        className='rounded-[10px] block'
                                    />
                                )}
                                {e.variantTitle}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </>
            ))}
        </div>
    )
})
