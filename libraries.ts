export interface Banner {
    banner_id?: number;
    banner_uid?: string;
    division?: string;
    banner?: string;   
}

export interface risk {
    risk_id?: number;
    risk_uid?: string;
    au_level_3_uid?: string;
    process?: string;
    business_objective?: string;
    risk?: string;
    comment?: string;
    impact?: string;
    likelihood?: string;
    risk_score?: string;
    risk_exposure?: string;
    kri_id?: string;
    }

    export interface control {
        control_id?: number;
        control_uid?: string;
        au_level_4_uid?: string;
        banner_uid?: string;
        risk_uid?: string;
        control?: string;
        comments?: string;
        control_type?: string;
        frequency?: string;
        automation?: string;
        category?: string;
        assertion?: string;
        key_control?: string;
        }


        
    export interface auditDetails {
        au_level_1_id?: number;
        au_level_1_uid?: string;
        au_level_1_desc?: string;
        au_level_2_uid?: string;
        au_level_2_desc?: string;
        au_level_3_uid?: string;
        au_level_3_desc?: string;
        au_level_3_definition?: string;
        au_level_3_comments?: string;
        au_level_4_uid?: string;
        au_level_4_desc?: string;
        au_level_4_definition?: string;
        au_level_4_comments?: string;
     
        }



        export interface code_values {
            code_id?: number;
            code_name?: string;
            code_value_key?: number;
            text_code_value?: string;
            order_number?: number;
            active_flag?: number;
                    }