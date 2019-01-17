<?php

namespace CodeShopping\Http\Requests;

use CodeShopping\Rules\FirebaseTokenVerification;
use CodeShopping\Rules\PhoneNumberUnique;
use Illuminate\Foundation\Http\FormRequest;

class UserProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $userId = \Auth::guard('api')->user()->id;

        return [
            'name' => 'max:255',
            'email' => "email|unique:users,email,{$userId}",
            'photo' => 'image|max:' . (3 * 1024),
            'password' => 'min:4|max:16',
            'token' => [
                new FirebaseTokenVerification(),
                new PhoneNumberUnique($userId)
            ]
        ];
    }
}
