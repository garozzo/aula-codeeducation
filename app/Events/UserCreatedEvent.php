<?php
declare(strict_types=1);

namespace CodeShopping\Events;

use CodeShopping\Models\User;

class UserCreatedEvent
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }



    /**
     * @return mixed
     */
    public function getUser() : User
    {
        return $this->user;
    }
}
